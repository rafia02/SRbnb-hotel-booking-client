import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import SingleHotel from './Home/SingleHotel';

const AllHotelPage = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);


    useEffect(() => {
        fetch(`https://room-booking-server.vercel.app/hotels`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(e => console.error(e))
    }, []);


    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };


    const itemsPerPage = 8;
    const pageCount = Math.floor(products.length / itemsPerPage);
    console.log(pageCount)
    const offset = currentPage * itemsPerPage;
    console.log(offset)
    const currentProducts = products.slice(offset, offset + itemsPerPage);


    return (
        <div>


            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-14 my-16'>
                {
                    currentProducts?.map(htl => <SingleHotel
                        key={htl._id}
                        htl={htl}
                    ></SingleHotel>)
                }
            </div>



            <div className='flex justify-center my-20'>
                <ReactPaginate
                    previousLabel="Previous"
                    nextLabel="Next"
                    breakLabel="..."
                    breakClassName="break-me"
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName="pagination flex"
                    activeClassName=" active text-white bg-blue-500"
                    pageClassName="mx-2 px-3 py-1 text-white font-bold bg-rose-600 rounded"
                    previousClassName="mx-2 px-3 py-1 text-white font-bold bg-rose-600 rounded"
                    nextClassName="mx-2 px-3 py-1 text-white font-bold bg-rose-600 rounded"
                />
            </div>
        </div>
    );
};

export default AllHotelPage;