import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function Create() {

  const [form, setForm] = useState({
    id: "",
    name: "",
    price: "",
    stock: "",
    description: ""
  });
  const navigate = useNavigate()
  const [product, setProduct] = useState([]);
  const [value, setValue] = useState([]);
  const [existedEmail, setExistedEmail] = useState("");
  const CreateSchema = Yup.object({
    id: Yup.string()
      .required("Bắt buộc!"),
    name: Yup.string()
      .min(4, "Tối thiểu 4 ký tự!")
      .max(50, "Tối đa 50 ký tự!")
      .required("Bắt buộc!"),
    price: Yup.number()
      .required("Nhập giá vào!"),
    stock: Yup.number()
      .required("Không được để trống!"),
    description: Yup.string()
      .required("Không được để trống!"),

  })


  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmit( value ) {
    axios.post(`http://localhost:3001/products`, value)
      .then(res => {
        console.log(res)
        setProduct(res.data);
        navigate('/')
      })
      .catch(err => {
        throw err;
      });
    alert("Create successfully!!!");
  }

  return (
    <>
      <h1 class="underline decoration-solid italic hover:not-italic" >Create New Product</h1>

      <Formik
        initialValues={form}
        validationSchema={CreateSchema}
        onSubmit={value => {
          handleSubmit(value)
          .then((res)=> {
            console.log(res)
            return res
          })
          .catch((e) => setExistedEmail("Không được để trống"))
        }}
      >
        <Form>
          <div class="relative p-4 border border-grey-lighter w-1/2">
          {existedEmail ? (
                <div
                  style={{ height: 10, fontSize: 15 }}
                  class="rounded-lg py-2 px-2 mb-3 text-base text-red-700 inline-flex items-center  "
                  role="alert"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="times-circle"
                    class="w-4 h-4 mr-2 fill-current"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                    ></path>
                  </svg>
                  {existedEmail}
                </div>
              ) : null}
            <div class="flex flex-wrap items-stretch w-full mb-4 relative">
              <div class="flex -mr-px">
                <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">ID </span>
              </div>
              <Field
                  type="text"
                  name="id"
                  class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"
                />
                <ErrorMessage name="id" />
              {/* <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" name="id" onChange={handleChange} /> */}
            </div>

            <div class="flex flex-wrap items-stretch w-full mb-4 relative">
              <div class="flex -mr-px">
                <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Name </span>
              </div>
              <Field
                  type="text"
                  name="name"
                  class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"
                />
                <ErrorMessage name="name" />
              {/* <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" name="id" onChange={handleChange} /> */}
            </div>

            <div class="flex flex-wrap items-stretch w-full mb-4 relative">
              <div class="flex -mr-px">
                <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Price </span>
              </div>
              <Field
                  type="number"
                  name="price"
                  class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"
                />
                <ErrorMessage name="price" />
              {/* <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" name="id" onChange={handleChange} /> */}
            </div>
           
            <div class="flex flex-wrap items-stretch w-full mb-4 relative">
              <div class="flex -mr-px">
                <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Stock </span>
              </div>
              <Field
                  type="number"
                  name="stock"
                  class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"
                />
                <ErrorMessage name="stock" />
              {/* <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" name="id" onChange={handleChange} /> */}
            </div>

            <div class="flex flex-wrap items-stretch w-full mb-4 relative">
              <div class="flex -mr-px">
                <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Description </span>
              </div>
              <Field
                  type="text"
                  name="description"
                  class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"
                />
                <ErrorMessage name="description" />
              {/* <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" name="id" onChange={handleChange} /> */}
            </div>


            <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer" type="submit"  >
              Submit
            </button>


            <Link className="bg-yellow-400 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer" to={`/`}>Cancel</Link>

          </div>
        </Form>
      </Formik>

      {/* <form>
        <div class="relative p-4 border border-grey-lighter w-1/2">

          <div class="flex flex-wrap items-stretch w-full mb-4 relative">
            <div class="flex -mr-px">
              <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">ID </span>
            </div>
            <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" name="id" onChange={handleChange} />
          </div>

          <div class="flex flex-wrap items-stretch w-full mb-4 relative">
            <div class="flex -mr-px">
              <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Name </span>
            </div>
            <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" name="name" onChange={handleChange} />
          </div>


          <div class="flex flex-wrap items-stretch w-full mb-4 relative">
            <div class="flex -mr-px">
              <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Price </span>
            </div>
            <input class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" type='nummber' name="price" onChange={handleChange} />
          </div>


          <div class="flex flex-wrap items-stretch w-full mb-4 relative">
            <div class="flex -mr-px">
              <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Stock </span>
            </div>
            <input class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" type='number' name="stock" onChange={handleChange} />
          </div>


          <div class="flex flex-wrap items-stretch w-full mb-4 relative">
            <div class="flex -mr-px">
              <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Description </span>
            </div>
            <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" name="description" onChange={handleChange} />
          </div>


          <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer" type="submit"  >
            Submit
          </button>


          <Link className="bg-yellow-400 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer" to={`/`}>Cancel</Link>

        </div>
      </form> */}

    </>
  )
}