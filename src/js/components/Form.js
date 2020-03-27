import React, { useState } from "react";
import { connect } from "react-redux";
// import { addArticle } from "../actions/index";
import { addArticle } from "../slices/articleSlice";

const mapDispatch = { addArticle }
// function mapDispatchToProps(dispatch) {
//   return {
//     addArticle: article => dispatch(addArticle(article))
//   };
// }


// class ConnectedForm extends Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({ [event.target.id]: event.target.value });
//   }
//
//   handleSubmit(event) {
//     event.preventDefault();
//     // this.props.addArticle({ title });
//     addArticle( this.state );
//
//     this.setState({ title: "" });
//   }
//   render() {
//     const { title } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div>
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={this.handleChange}
//           />
//         </div>
//         <button type="submit">SAVE</button>
//       </form>
//     );
//   }
// }
const ConnectedForm = ({ addArticle }) => {

    const [ title, setTitle ] = useState('');

    const onChange = e => setTitle(e.target.value)

    return (
        <form onSubmit={(event) => {
                event.preventDefault();
                addArticle( title );
                setTitle('')
            }}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={onChange}
            />
          </div>
          <button type="submit">SAVE</button>
        </form>
    )
}

const Form = connect(
  null,
  mapDispatch
)(ConnectedForm);

export default Form;
