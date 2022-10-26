import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Detail() {
  const navigate = useNavigate()


    const { productID } = useParams();
    const isCreate = !productID;
    const [product, setProduct] = useState({});

    const handleDelete = () => {
     
      console.log(productID)
  
      if(productID) {
       axios.delete(`http://localhost:3001/products/${productID}`)
       .then(res=> {
          alert(res.data.message)},
          navigate('/') )
       
       .catch(err=> {throw err})
      }
  }
    useEffect(() => {
        if (productID) {
          axios
            .get(`http://localhost:3001/products/${productID}`)
            .then(res => {
              setProduct(res.data);
            })
            .catch(err => {
              throw err;
            });
        }
      }, [productID]);
      return (
        <div>
        <h1>User details</h1>
        <form key={product.id}>
        <div className="relative p-4 border border-grey-lighter w-1/2">

<div className="flex flex-wrap items-stretch w-full mb-4 relative">
  <div className="flex -mr-px">
    <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">ID </span>
  </div>
  <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" value={product.id || ""} disabled />
</div>

<div className="flex flex-wrap items-stretch w-full mb-4 relative">
  <div className="flex -mr-px">
    <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Name </span>
  </div>
  <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" value={product.name || ""} disabled />
</div>


<div className="flex flex-wrap items-stretch w-full mb-4 relative">
  <div className="flex -mr-px">
    <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Price </span>
  </div>
  <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" value={product.price || ""} disabled />
</div>


<div className="flex flex-wrap items-stretch w-full mb-4 relative">
  <div className="flex -mr-px">
    <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Stock </span>
  </div>
  <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" value={product.stock || ""} disabled />
</div>


<div className="flex flex-wrap items-stretch w-full mb-4 relative">
  <div className="flex -mr-px">
    <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Description </span>
  </div>
  <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" name="description" value={product.description || ""} disabled />
</div>



</div>
        </form>
        <button  className="bg-red-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer" onClick={(product)=> handleDelete(product)}>Delete</button>

        <Link  className="bg-yellow-400 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer" to={`/`}>Back to List</Link>
      </div>

      )
}