import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Update() {
  const { productID } = useParams();
  const isCreate = !productID;
  const [product, setProduct] = useState({});
  const navigate = useNavigate()
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

  function handleChange(event) {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit() {
    axios
      .put(`http://localhost:3001/products/${productID}`, product)
      .then(res => {
        alert(
          `${isCreate ? "Create" : "Edit"} Product ${JSON.stringify(
            res.data
          )} successfully!!!`
          
        ) ; navigate(`/`);
      })
      .catch(err => {
        throw err;
      });

  }
  return (

    <>

      <h1 class="underline decoration-solid italic hover:not-italic">Update Product</h1>
      <form>
        <div class="relative p-4 border border-grey-lighter w-1/2">

          <div class="flex flex-wrap items-stretch w-full mb-4 relative">
            <div class="flex -mr-px">
              <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">ID </span>
            </div>
            <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" name="id" value={product.id || ""} onChange={handleChange} placeholder={product.id} disabled />
          </div>

          <div class="flex flex-wrap items-stretch w-full mb-4 relative">
            <div class="flex -mr-px">
              <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Name </span>
            </div>
            <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" name="name" value={product.name || ""} onChange={handleChange} placeholder={product.name} />
          </div>


          <div class="flex flex-wrap items-stretch w-full mb-4 relative">
            <div class="flex -mr-px">
              <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Price </span>
            </div>
            <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" name="price" value={product.price || ""} onChange={handleChange} placeholder={product.price} />
          </div>


          <div class="flex flex-wrap items-stretch w-full mb-4 relative">
            <div class="flex -mr-px">
              <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Stock </span>
            </div>
            <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" name="stock" value={product.stock || ""} onChange={handleChange} placeholder={product.stock} />
          </div>


          <div class="flex flex-wrap items-stretch w-full mb-4 relative">
            <div class="flex -mr-px">
              <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Description </span>
            </div>
            <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" name="description" value={product.description || ""} onChange={handleChange} placeholder={product.description} />
          </div>


          <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer" type="button" onClick={handleSubmit}>
            Submit
          </button>
            <Link className="bg-yellow-400 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer" to={`/`}>Cancel</Link>
        </div>
      </form>
    </>
  )
}