import { useState } from "react"
import { update, auth, resetPassword } from "../firebase"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../store/auth"



export default function UpdateProfile() {

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)
    const [displayName, setDisplayName] = useState(user.displayName || "")
    const [avatar, setAvatar] = useState(user.photoURL || "")
    const [password, setPassword] = useState("")

    const handleSubmit = async e => {
        e.preventDefault()
        await update({
            displayName,
            photoURL: avatar
        })
        // console.log(auth.currentUser)
        dispatch(login({
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            emailVerified: auth.currentUser.emailVerified,
            photoURL: auth.currentUser.photoURL,
            uid: auth.currentUser.uid,
        }))
    }



    const handleResetSubmit = async e => {
        e.preventDefault()
        const result = await resetPassword(password)
        if (result) {
            setPassword('')
        }
    }


    return (
        <div className="grid gap-y-10">
            <form onSubmit={handleSubmit} className="grid gap-y-4">
                <h1 className="text-xl font-bold mb-4">Profili Güncelle</h1>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Ad-Soyad
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-500"
                            placeholder="John doe"
                            value={displayName} onChange={e => setDisplayName(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Fotograf
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-500"
                            placeholder="John doe"
                            value={avatar} onChange={e => setAvatar(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <button
                        className="bg-blue-500 text-white disabled:opacity-20 cursor-pointer px-6 py-3 rounded-lg text-lg hover:bg-pink-700 transition duration-300"
                        type="submit" >
                        Güncelle
                    </button>
                </div>

            </form>

            <form onSubmit={handleResetSubmit} className="grid gap-y-4">
                <h1 className="text-xl font-bold mb-4">Profili Güncelle</h1>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Paraloyu Güncelle
                    </label>
                    <div className="mt-1">
                        <input
                            type="password"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-500"
                            placeholder="Lütfen Parolayı Güncellemeyi Unutmayın.."
                            value={password} onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <button
                        disabled={!password}
                        className="bg-green-500 text-white disabled:opacity-20 cursor-pointer px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition duration-300"
                        type="submit" >
                        Şifreyi Güncelle
                    </button>
                </div>


            </form >




        </div >




    )
}