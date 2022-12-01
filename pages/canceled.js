import React from 'react'
import Link from 'next/link'

function Canceled() {
  return (
    <div className='canceled'>
        <div>
        <h2>Oops! Checkout Canceled</h2>
            <Link href='/'>
                <button type='button' width="300px" className='btn'>Continue shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default Canceled