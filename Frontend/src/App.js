import logo from './logo.svg';
//import useState
import { useState } from 'react' ;
import './App.css';


let dataAwal = 
[
  {
    id:1,
    username: 'laode1',
    email: 'laode1@gmail.com',
    exp: '90',
    lvl: "30"
  },
  {
    id:2,
    username: 'laode2',
    email: 'laode2@gmail.com',
    exp: '80',
    lvl: "10"
  },
  {
    id:3,
    username: 'laodeiman',
    email: 'laode3@gmail.com',
    exp: '90',
    lvl: "20"
  }
]

function App() {

  //username, email, experiance, dan lvl. -> untuk data list
  // 1. listening data ke dalam FE / react js
        //impost useState => buat define state
        //kita buat state, setter getter state, done
        //inisiasi nilai awal state, done
        //tampilkan list data
        const [formPlayer, setFormPlayer]= useState({
          id: '',
          username: '',
          email: '',
          exp: '',
          lvl: ''
        })

        const [formEditPlayer, setFormEditPlayer]= useState({
          id: '',
          username: '',
          email: '',
          exp: '',
          lvl: ''
        })

        const[player, setPlayer] = useState([
          {
            id: 1,
            username: 'laode1',
            email: 'laode1@gmail.com',
            exp: '90',
            lvl: '30'
          },
          {
            id: 2,
            username: 'laode2',
            email: 'laode2@gmail.com',
            exp: '80',
            lvl: '10'
          },
          {
            id: 3,
            username: 'laodeiman',
            email: 'laode3@gmail.com',
            exp: '90',
            lvl: '20'
          }
        ])


        const addData = () => {
          // let databaru = {
          //     username: 'laodeiman',
          //     email: 'laode3@gmail.com',
          //     exp: '90',
          //     lvl: 20
          // }
          setPlayer([...player, formPlayer])
          setFormPlayer({
            username: '',
            email: '',
            exp: '',
            lvl: ''
          })
        }


        
        const changeEditHandler = (e) => {
          setFormEditPlayer({
            ...formEditPlayer,
            [e.target.name] : e.target.value
          })
        }

        const changeHandler = (e) => {
          setFormPlayer({
            ...formPlayer,
            [e.target.name] : e.target.value
          })
        }

          const EditData = (id) =>{
            player.filter((el) => {
              if (el.id == id){
                console.log('data', el)
                setFormEditPlayer(el)
              }
            })
          }
        
        const buttonEditData = () => {
          let playerTemp = player
          let hasil = player.findIndex((el) => el.id == formEditPlayer.id )
          // console.log(player)
          playerTemp[hasil].username = formEditPlayer.username
          playerTemp[hasil].email = formEditPlayer.email
          playerTemp[hasil].exp = formEditPlayer.exp
          playerTemp[hasil].lvl = formEditPlayer.lvl
          setPlayer(playerTemp)
          setFormEditPlayer({
            username: '',
            email: '',
            exp: '',
            lvl: ''
          })
        }

        const [search, setsearch] = useState('')

        // const [playerTemp, setPlayerTemp] = useState([])

        const searchHandler = (e) => {
          setsearch(e.target.value)
        }

        const searchClick = () => 
        {
          // players.filter(search)//
          // setPlayerTemp(player)
          let playerTemp= dataAwal
          let playerFinal= playerTemp.filter((el) => 
          {
            el.username.search(search) 
            if(el.username.search(search) >= 0 
            || el.email.search(search) >= 0
            || el.lvl.search(search) >= 0
            || el.exp.search(search) >= 0){
              return el
            }
          }) 
          
          if(search == ""){
            setPlayer(dataAwal)
          } else {
          setPlayer(playerFinal) 
          }
        }

  return (
    
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      <p>Search Data</p>
      <input
        type="text"
        placeholder="Search"
        value={search}
        name="username"
        onChange={searchHandler}
        />

      <button onClick={searchClick}>Search</button>


      {
        player.map((data, index) => {

          let player_id = data.id

          return (
            
            <>
            {/* <hr/>
             <h5>Username: {data.username}</h5>
             <h5>Email: {data.email}</h5>
             <h5>Experiance: {data.exp}</h5>
             <h5>Level: {data.lvl}</h5>
             <h5>
                <button onClick = {() => {EditData(player_id)}}>Edit</button>
             </h5>

            <hr/> */}
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Experiance</th>
      <th scope="col">Level</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>{index + 1}</th>
      <td>{data.username}</td>
      <td>{data.email}</td>
      <td>{data.exp}</td>
      <td>{data.lvl}</td>
      <td>
          {/* <button onClick = {() => {EditData(player_id)}}>Edit</button> */}
          <button type="button" class="btn btn-warning" onClick = {() => {EditData(player_id)}}>Edit</button>
      </td>
    </tr>
  </tbody>
</table>

            </>
          )
        })
      }
 <hr/>
      <div>
            <p>Add Data</p>
            <form>
              <input
              type="text"
              placeholder="Username"
              value={formPlayer.username}
              name="username"
              onChange={changeHandler}
              />

              <input
              type="text"
              placeholder="Email"
              value={formPlayer.email}
              name="email"
              onChange={changeHandler}
              />

              <input
              type="text"
              placeholder="Experiance"
              value={formPlayer.exp}
              name="exp"
              onChange={changeHandler}
              />

              <input
              type="text"
              placeholder="Level"
              value={formPlayer.lvl}
              name="lvl"
              onChange={changeHandler}
              />
              </form>
              
            {/* <button onClick={addData}>Submit</button> */}
            <button type="button" class="btn btn-primary" onClick={addData}>Submit</button>
      </div>
      <hr/>
      <div>
      <p>Edit Data</p>
            <form>
              <input
              type="text"
              placeholder="Username"
              value={formEditPlayer.username}
              name="username"
              onChange={changeEditHandler}
              />

              <input
              type="text"
              placeholder="Email"
              value={formEditPlayer.email}
              name="email"
              onChange={changeEditHandler}
              />

              <input
              type="text"
              placeholder="Experiance"
              value={formEditPlayer.exp}
              name="exp"
              onChange={changeEditHandler}
              />

              <input
              type="text"
              placeholder="Level"
              value={formEditPlayer.lvl}
              name="lvl"
              onChange={changeEditHandler}
              />
              </form>
              
            {/* <button onClick={buttonEditData}>Submit</button> */}
            <button type="button" class="btn btn-primary" onClick={buttonEditData}>Submit</button>
      </div>
      

    </div>

      //bikin button edit
      //button edit nge trigger function
      //[acri lewat id]
      //functionnya cocolon id sebagai penentu data yang akan di rubah
      //setelah ituedit data, formnya kembali kosong


  );
}

export default App;
