import React from 'react'
import '../App.css'
import img from '../img.png'
import EditIcon from '@material-ui/icons/Edit';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
 
 
 

class profile extends React.Component{
      constructor(props){
          super(props)
        this.state = {
            profileimg:img,
            username:"alia style",
            iseditview: false
       }
       this.imageHandler=this.imageHandler.bind(this)
       this.changeiseditview=this.changeiseditview.bind(this)
       this.rendereditview=this.rendereditview.bind(this)
       this.saveedit=this.saveedit.bind(this)
      }
      
      imageHandler = (e) => {
          const reader = new FileReader()
          let file = e.target.files[0]
          reader.onloadend=()=>{
            this.setState({
                profileimg: reader.result
            });

          }
          reader.readAsDataURL(file)     
      };

      changeiseditview = ()=>{
          this.setState({
              iseditview: ! this.state.iseditview
          });
      }

      saveedit=()=>{
          this.setState({
              iseditview: false,
              username: this.refs.textinput.value
          })
      }

      rendereditview =()=>{
          return(
              <div>
                  <input
                      type="text"
                      defaultValue={this.state.username}
                      ref="textinput"
                  />
                  <button onClick={this.saveedit}>save</button>
                  <button onClick={this.changeiseditview}>X</button>
              </div>
          )
      }

    render(){
         
    return(
        <div className="outer"> 
         
        <div className="page">
         
            <div className="container">
            <div> 
            <h4 className="name"> {this.state.username}<EditIcon onClick={this.changeiseditview}/> </h4> 
             {this.state.iseditview ? this.rendereditview(): null} 
            </div>
                <h2>Add your picture</h2>
                <div className="img-holder">
                    <img src= {this.state.profileimg} alt="" id="img" className="image"></img>
                </div>
                <input type="file" name="imgupload" id="image" accept="images/*"  onChange={this.imageHandler}></input>
                <div className="label"> 
                <label htmlFor="image" className="image-upload">
                    <i className="material-icon"><AddPhotoAlternateIcon/></i>
                </label>
                </div>
            </div>
        </div>
        </div>  
    );

}
}
export default profile;
