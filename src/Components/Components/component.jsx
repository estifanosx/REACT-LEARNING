

export default function Component({name,status,role}) {
   const userStatus={
    active :"bg-green-900 border-green-600",
    inactive :"bg-red-900 border-red-600",
    warning :"bg-yellow-900 border-yellow-600"
   }

  return (
    <div className ={`rounded-xl p-4 ${userStatus[status]}`}>
         <h2>{name}</h2>
      <p>{role}</p>
      <span>{status}</span>
    </div>
  )
}
