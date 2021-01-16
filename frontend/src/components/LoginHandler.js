// import { setSessionCookie } from "../redux/setSessionCookie"

// const LoginHandler = ({history}) => {
//     const [email, setEmail] = useState("")
//     const [loading, setLoading] = userState(false)
//     const handleSubmit = async e => {
//         e.preventDefault()
//         setLoading(true)
//         async function login(url, data) {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 mode: 'cors',
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json"
//                 },
//                 body: JSON.stringify(data)
//             })
//             // console.log(response)
//             return response.json() 
//         }
//         setSessionCookie({email})
//         history.push("/")
//         setLoading(false)
//     }
//     if (loading) {
//         return <h4>Logging in ...</h4>
//     }
//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
//                 <input type="submit" value="login" />
//             </form>
//         </div>
//     )
// }

// const LogoutHandler = ({ history }) => {
//     useEffect(
//         () => {
//             Cookies.remove("session")
//             history.push("/login")
//         },
//         [history]
//     )
//     return <div>Logging out!</div>
// }

// const ProtectedHandler = () => {
//     return(
//         <>
//             <Link to="/logout">Log out here</Link>
//         </>
//     )
// }