// import { useDispatch, useSelector } from "react-redux"
// import { Link } from "react-router-dom"
// import { logout, auth, emailVerificaiton } from "../firebase"
// import { logout as logoutHandle } from "../store/auth"
// import { useNavigate } from "react-router-dom"
// import UpdateProfile from "../components/UpdateProfile"
// // import { useEffect } from "react"

// export default function Home() {

//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const { user } = useSelector(state => state.auth)
//     const handleLogout = async () => {
//         await logout()
//         dispatch(logoutHandle())
//         navigate('/login', {
//             replace: true
//         })
//     }


//     //   useEffect(()=>{
//     //     console.log('USER CHANGE!' ,user);
//     // } ,[user])


//     const handleVerification = async () => {
//         await emailVerificaiton()
//     }

//     if (user) {
//         return (
//             <div className="max-w-2xl mx-auto py-5">
//                 <h1 className="flex gap-x-4 items-center">
//                     {auth.currentUser.photoURL && <img src={auth.currentUser.photoURL} alt="User profile" className="size-24 rounded-full" />}
//                     Oturum Açık ({user.email})
//                     <button onClick={handleLogout} className="h-8 rounded px-4 text-sm text-white bg-indigo-700">Çıkış Yap</button>
//                     {!user.emailVerified && <button onClick={handleVerification} className="h-8 rounded px-4 text-sm text-white bg-indigo-700">E-posta Onayla</button>}
//                 </h1>

//                 <UpdateProfile />

//             </div>
//         )
//     }

//     return (
//___________________________________________________________________________________________________________________

//         <div className="mb-5 flex justify-start gap-5 mt-10 ml-3 ">
//         <Link to="/register" className="h-8 pt-1 text-center rounded px-4 text-sm text-white bg-indigo-700">KAYIT OL</Link>
//         <Link to="/login" className="h-8 pt-1 rounded px-4 text-sm text-white bg-indigo-700">GİRİŞ YAP</Link>
//         </div>
// ____________________________________________________________________________________________________________________
//         <div className="flex justify-center items-center min-h-screen">
//             <div className="mb-5 flex justify-start gap-5 mt-10 ml-3">
//                 <Link to="/register" className="h-8 pt-1 text-center rounded px-4 text-sm text-white bg-indigo-700">
//                     KAYIT OL
//                 </Link>
//                 <Link to="/login" className="h-8 pt-1 rounded px-4 text-sm text-white bg-indigo-700">
//                     GİRİŞ YAP
//                 </Link>
//             </div>
//         </div>

//     )
// }
//____________________________________________________________________________________________________________________

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout, auth, emailVerificaiton } from "../firebase"
import { logout as logoutHandle } from "../store/auth"
import UpdateProfile from "../components/UpdateProfile"
import toast, { Toaster } from "react-hot-toast"

export default function Home() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)

    const handleLogout = async () => {
        await logout()
        dispatch(logoutHandle())
        navigate('/login', {
            replace: true
        })
    }

    const handleVerification = async () => {
        await emailVerificaiton()
    }

    const handleRegisterClick = () => {
        toast.success("Kayıt sayfasına yönlendiriliyorsunuz... 🚀")
        setTimeout(() => {
            navigate('/register')
        }, 1000)
    }

    const handleLoginClick = () => {
        toast('Giriş sayfasına yönlendiriliyorsunuz... 🔐')
        setTimeout(() => {
            navigate('/login')
        }, 1000)
    }

    if (user) {
        return (
            <div className="max-w-2xl mx-auto py-5">
                <Toaster position="top-right" />
                <h1 className="flex gap-x-4 items-center">
                    {auth.currentUser.photoURL && (
                        <img src={auth.currentUser.photoURL} alt="User profile" className="size-24 rounded-full" />
                    )}
                    Oturum Açık ({user.email})
                    <button onClick={handleLogout} className="h-8 rounded px-4 text-sm text-white bg-indigo-700">
                        Çıkış Yap
                    </button>
                    {!user.emailVerified && (
                        <button onClick={handleVerification} className="h-8 rounded px-4 text-sm text-white bg-indigo-700">
                            E-posta Onayla
                        </button>
                    )}
                </h1>

                <UpdateProfile />
            </div>
        )
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Toaster position="top-right" />
            <div className="mb-5 flex justify-start gap-5 mt-10 ml-3">
                <button onClick={handleRegisterClick} className="h-8 pt-1 text-center rounded px-4 text-sm text-white bg-indigo-700">
                    KAYIT OL
                </button>
                <button onClick={handleLoginClick} className="h-8 pt-1 rounded px-4 text-sm text-white bg-indigo-700">
                    GİRİŞ YAP
                </button>
            </div>
        </div>
    )
}
