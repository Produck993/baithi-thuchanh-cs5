import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Index() {
    const [product, setProDuct] = useState([]);
const navigate = useNavigate()
    const componentDidmount = () => {
        axios
            .get('http://localhost:3001/products')
            .then(res => {
                setProDuct(res.data);
            })
            .catch(err => {
                throw err;
            });
    }


    const handleDelete = (item) => {
        const itemDelete = item.id
        if(itemDelete) {
         axios.delete(`http://localhost:3001/products/${itemDelete}`)
         .then(res=> {
            alert(res.data.message)},
            navigate('/') )
         
         .catch(err=> {throw err})
        }
    }

    useEffect(() => {
        componentDidmount()
       
    }, [handleDelete])
  

    return (
        <>

            <div class="bg-white p-8 rounded-md w-full">
	<div class=" flex items-center justify-between pb-6">
		<div class="flex items-center justify-between">
				<div class="lg:ml-40 ml-10 space-x-8">
					<Link to="/create"  class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"> Create</Link>
				</div>
			</div>
		</div>
		<div>
			<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
					<table class="min-w-full leading-normal">
						<thead>
							<tr>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									STT
								</th>
                                <th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Name
								</th>
                                <th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Price
								</th>
                                <th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Stock
								</th>
                                <th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Description
								</th>
                                <th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
                        {product.map((item,index)=> (
                            			<tr>
                             
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="flex items-center">
                                                    <div class="ml-3">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            {index + 1}
                                                        </p>
                                                    </div>
                                                </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-teal-600 whitespace-no-wrap"> <Link to={`/detail/${item.id}`}>
                            {item.name}</Link></p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                            {item.price}
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                            {item.stock}
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span
                                                class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden
                                                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                            <span class="relative">{item.description}</span>
                                            </span>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            
                                            
                                             <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"><Link to={`/update/${item.id}`}>Update</Link></button>
                                                <button  class="bg-red-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer" onClick={()=> handleDelete(item)}>Delete</button>
                                            
                                        </td>
                                    </tr>
                        ))}
				
				
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
        </>
    )
}