import Swal from 'sweetalert2';
import { SendRequest } from './SendRequest';

export const Alert = (msg,icon) =>
{
    Swal.fire({
        position: 'top-end',
        icon: icon,
        title: msg,
        showConfirmButton: false,
        timer: 1500
      })
}


export const confirmation = async(name, params, url) =>
{
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      SendRequest('DELETE',params,url);
    }
  })
}