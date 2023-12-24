export default function Form() {
  return(
    <div className="body_form">
      <form action="" method="post">
        <h2>UserData</h2>
        <label htmlFor="lore">lore:</label>
        <input type="text" name='lore' placeholder="write your personal lore for the game" />
        <label htmlFor="role">role:</label>
        <input type="text" name='role' placeholder="write your personal role for the game" />
        <label htmlFor="hp">HP:</label>
        <input type='number' name='hp' placeholder="write value of your HP" />
        <button className='form_blue' type="button">HELL YEAH</button>
      </form>
    </div>
  )
}