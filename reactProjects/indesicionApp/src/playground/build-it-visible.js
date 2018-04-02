// Visibility - render, constructor, handleVisibility
// visibility -> false

class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleVisibility(){
        this.setState((prevState) =>{
            return{
                visibility: !prevState.visibility
            };
        });
    }

    render(){
        return(
        <div>
          <h1>Muestrame la info.</h1>          
          {this.state.visibility ? (<div><p>Esta es la info detallada! :p</p></div>) : (<div><p>Esta oculta la info detallada! :p</p></div>) }
          <button onClick={this.handleVisibility}>
            {this.state.visibility ? 'Esconde Detalles' : 'Muestra Detalles'}
          </button>
        </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));


// let visibility = false;

// const toggleVisibility = () =>{
//     visibility = !visibility;
//     render();
// };


// const render = () =>{
//     const jsx =(
//         <div>
//           <h1>Muestrame la info.</h1>
//           <button onClick={toggleVisibility}>
//             {visibility ? 'Esconde Detalles' : 'Muestra Detalles'}
//           </button>
//           {visibility && (
//               <div>
//                 <p>Esta es la info detallada! :p</p>
//               </div>
//           )}
//         </div>
//     );
//     ReactDOM.render(jsx, document.getElementById('app'))
// };

// render()