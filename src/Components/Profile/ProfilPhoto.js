import React from 'react'
import image from './Photo/profile.jpg'

function ProfilPhoto() {
    return (
        <div>
              <img src={image}  alt="MyProfilPhoto" style={{ width:"150px",  height:'150px' }} />
            
        </div>
    )
}

export default ProfilPhoto
