import { db } from "../backend/app_backend";
import jQuery from "jquery";
import Swal from "sweetalert2";

const saveLocation = (location) => {
  jQuery(($) => {
    $.noConflict();

    const $defaultLocation = location.trim();

    //check if the location is empty
    if ($defaultLocation === undefined || $defaultLocation == "") {
      Swal.fire({
        title: "Invalid Location!",
        html: "<p class=' text-center text-danger'>Please enter a valid location</p>",
        confirmButtonColor: "rgb(83, 166, 250)",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        timer: 4000,
      });
    } else {
      Swal.fire({
        text: "Location updated successfully!",
        icon: "success",
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
      });

      db.update("USER_DEFAULT_LOCATION", $defaultLocation);
      
    }
  });
};
