import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth, db} from "@/firebase";
import { ref } from "vue";
import {collection, doc, deleteDoc, getDocs, setDoc} from "firebase/firestore";

export default () => {

    const user = ref(""), password = ref(""), identifiant = ref("");

    const action = ref({
        isActive: false,
        title: "",
        text: "",
        color: ""
    });

    const datas = ref([]);
    const areDatasLoaded = ref(false);
    const docId = ref("");

    const createUser = () =>{
        createUserWithEmailAndPassword(auth, user.value, password.value)
            .then(() => {
                setTimeout(() => {
                    window.location.href = "/home";
                }, 1000);
            })
            .catch((error) => {
                console.log(error.message);
                let errorType = error.message === 'Firebase: Error (auth/email-already-in-use).' ? "L'utilisateur existe déjà" : "Une erreur est survenue"
                action.value = {
                    isActive: true,
                    title: "Erreur",
                    text: errorType,
                    color: "bg-red-500"
                }
            });
    }

    const loginUser = () => {
        signInWithEmailAndPassword(auth, user.value, password.value)
            .then(() => {
                window.location.href = "/home";
            })
            .catch(() => {
                action.value = {
                    isActive: true,
                    title: "Erreur",
                    text: "Mail ou mot de passe incorrect",
                    color: "text-red-500"
                }
            });
    }

    const getDatas = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        const filteredDatas = [];

        querySnapshot.forEach((doc) => {
            if (doc.data().user === auth.currentUser.email) {
                const dataWithId = doc.data();
                dataWithId.id = doc.id;
                filteredDatas.push(dataWithId);
            }
        });

        const sortedDatas = filteredDatas.sort((a, b) => {
            if (a.siteTitle < b.siteTitle) {
                return -1;
            } else if (a.siteTitle > b.siteTitle) {
                return 1;
            } else {
                return 0;
            }
        });

        datas.value = sortedDatas;
        areDatasLoaded.value = true;
    };

    const createDoc = (creatingName, creatingIdentifiant, creatingPassword) => {
        try {
            setDoc(doc(db, "users",  (Math.random() + 1).toString(36).substring(4)), {
                    siteTitle: creatingName,
                    auth: creatingIdentifiant,
                    psw: creatingPassword,
                    user: auth.currentUser.email
                }
            )
                .then(() => {
                    action.value = {
                        isActive: true,
                        title: "Ajouté",
                        text: "Votre element a été ajouté avec succès",
                        color: "text-green-500"
                    }
                    setTimeout(() => {
                        window.location.href = "/home";
                    }, 1000);
                })
        } catch (e) {
            console.error("Error adding document: ", e);
            action.value = {
                isActive: true,
                title: "Erreur",
                text: "Une erreur est survenue lors de l'ajout de votre element",
                color: "text-red-500"
            }
        }
    }

    const deleteSelectedDoc = (id) => {
        try {
            deleteDoc(doc(db, "users", id))
                .then(() => {
                    action.value = {
                        isActive: true,
                        title: "Supprimé",
                        text: "Votre element a été supprimé avec succès",
                        color: "text-green-500"
                    }
                    window.location.reload()
                })
        } catch (e) {
            console.error("Error adding document: ", e);
            action.value = {
                isActive: true,
                title: "Erreur",
                text: "Une erreur est survenue lors de la suppression de votre element",
                color: "text-red-500"
            }
        }
    }

    return {
        createDoc,
        createUser,
        deleteSelectedDoc,
        getDatas,
        loginUser,

        action,
        areDatasLoaded,
        datas,
        docId,
        identifiant,
        password,
        user
    }
}
