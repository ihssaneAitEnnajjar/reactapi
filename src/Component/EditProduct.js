import React,{useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function EditProduct() {
    const navigate = useNavigate();
    const {id}=useParams();
    const [message,setMessage]=useState("");
    const[inputs,setInput]=useState([]);
    const [fileimage,setPhoto]=useState("");
    const handleChange = (event) =>{
        const  name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}));
    }
    const uploadProduct = async() =>{
        //console.log("uploading");
        const formData = new FormData();
        formData.append('_method','PUT');
        formData.append('name',inputs.name);
        formData.append('description',inputs.description);
        formData.append('image',fileimage);
        const response= await axios.post("http://127.0.0.1:8000/api/productsupdate/"+id, formData, {
            headers:{'Content-Type':"multipart/form-data"},
        } );
        setMessage(response.data.message); //"message": "Product successfully updated.."
        console.log(response)
        setTimeout(()=>{
            navigate('/productlist');
        }, 2000);
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await uploadProduct();
    }

    useEffect( ()=>{
        getproduct();
    },[]);
    function getproduct(){
        axios.get('http://127.0.0.1:8000/api/products/'+id).then(function (response) {
            console.log(response);
            setInput(response.data.product);
            
        });
    }

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 text-center text-capitalize bg-light">
                        <h5 className="mb-4">Edit Product</h5>
                        <p className="text-success"><b>{message}</b></p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <label className="col-sm-3">
                                    Product Title
                                </label>
                                <div className="col-sm-9">
                                <input type="text" value={inputs.name} className="form-control" name="name" onChange={handleChange}></input>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-3">
                                    Description
                                </label>
                                <div className="col-sm-9">
                                    <input type="text" value={inputs.description} className="form-control" name="description" onChange={handleChange}></input>
                                </div>
                            </div>
                            <div className="mb-3 row">
                    <label  className="col-sm-3">Product Image</label>
                    <div className="col-sm-9">
                    <img src={`http://127.0.0.1:8000/storage/${inputs.image}`} alt="" height={300} width/>
                    <input type="file" className="form-control" onChange={(e)=>setPhoto(e.target.files[0])} />
                    </div>
                    </div>
                            <div className="mb-3 row">
                                <div  style={{ textAlign: "center" }}>
                                   <button type="submit" className="btn btn-dark" style={{ width: "120px" }}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
    
}
export default EditProduct;