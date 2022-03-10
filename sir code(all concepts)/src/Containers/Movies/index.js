import React,{useEffect, useState} from "react";
import {SingleMovie} from "../../components/singlemovie";
import { useFormik } from "formik";
import {Link} from "react-router-dom";
import axios from "axios";

import * as yup from 'yup';

let schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required(),
});

 const Movies = () => {
    const [movies,setMovies] = useState([]);
    const [selectedIndex,setSelectedIndex] = useState(null);
     const [selectedMovie,setSelectedMovie] = useState(null);

   const formik = useFormik({
       initialValues:
       selectedMovie !==null ? selectedMovie:{
           title:'',
           description:''
       },
       validationSchema:schema,
       enableReinitialize:true,

       onSubmit: (values)=>{
          addMovie(values);
       }
   });

   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
       console.log(response);
       setMovies(response.data);
    })
   },[])

const onnEdit =(index)=>{
    debugger;
   setSelectedIndex(index);
   setSelectedMovie(movies[index]);
}


   const addMovie=(values)=>{
        console.log(values);
       const dummy = [...movies];
       if(selectedIndex !==null) {
           dummy[selectedIndex].title = values.title;
           dummy[selectedIndex].description= values.description
       } else {
        dummy.push({
            title: values.title,
            description:values.description
         });
  
       } 
      formik.resetForm();
      setSelectedIndex(null);
      setSelectedMovie(null);
      setMovies(dummy);
   }
   console.log(formik.errors);
     return (
        <div>
          <Link to="/login" >Sign In</Link>
          <br/>
          <Link to={`/netflix/${"my class"}`}>movie</Link>
          <br/>
            <h2>Add Movie Here</h2>
            <form className="border-dark px-3 py-2" style={{width:'300px',margin:'auto'}} onSubmit={formik.handleSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Movie Name:</label><br/>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.title}
                  type="text"
                  name="title"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Title"
                />
                {formik.errors.title && <p>{formik.errors.title}</p>}
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Enter Decription:</label>
                <textarea
                  type="text"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  className="form-control"
                  placeholder="decription"
                  name="description"
                />
                { formik.errors.description &&<p>{formik.errors.description}</p>}
              </div>

              <button type="submit" class="btn btn-primary">
                {selectedIndex !==null ? 'Update' :'Add'}
              </button>

            </form>
          <br/><br/>
          <h3 className="text-center mt-5">All Movies List</h3>

          <div className="container d-flex justify-content-center align-items-center flex-wrap">

            {movies && movies.length ? movies.map((movie,index)=>{
               return(
                <SingleMovie key={index} index={index} onEdit={onnEdit} title={movie.title} description={movie.body} />);
             }) :
                <div>No movie in List</div>
            }
           </div>
    </div>
  );
};

export default Movies;