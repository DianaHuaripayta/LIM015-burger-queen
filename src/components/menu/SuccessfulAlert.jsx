import swal from 'sweetalert';
export function SuccessfulAlert() {
    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });
    return (
        <div>
            
        </div>
    )
}
