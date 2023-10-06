import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { context } from '../Context/AuthContex'
import SingleHotel from './Home/SingleHotel'

const FilterPage = () => {
    const { minValue, maxValue, beds, rooms, baths } = useContext(context)
  const data = useLoaderData()
  const filterData = data?.filter(d => d.room.bedroom >= rooms && d.price >= minValue && d.price <= maxValue && d.room.bed >= beds && d.room.bath >= baths)


  console.log(filterData)
  return (
    <div>

      {
        filterData.length ?
          <div className='mx-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-14 my-16'>
            {
              filterData.map(htl => <SingleHotel
                key={htl._id}
                htl={htl}
              ></SingleHotel>)
            }




          </div>
          :
          <h4 className='text-2xl md:text-4xl text-center mt-10 font-bold '>No Found Any Hotel In This Place</h4>
      }

    </div>
  )
}

export default FilterPage