import './Navbar.css';



function BasicExample() {

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

    return (
        <section > 
            <div className="topnav" id="myTopnav">
  <a href="#home" className="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <div className="dropdown">
    <button className="dropbtn">Dropdown 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#A">Link 1</a>
      <a href="#B">Link 2</a>
      <a href="#C">Link 3</a>
    </div>
  </div> 
  <a href="#about">About</a>
  <a href="#ref" style={{fontSize:15}} className="icon" onClick={myFunction}>&#9776;</a>
</div>


        </section>
    );

   

    }


   
export default BasicExample;
