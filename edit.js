document.getElementById('editForm').addEventListener('submit', function(a) 
{
    a.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const business = document.getElementById('business').value;
    const email = document.getElementById('email').value;

    alert('saved:\nName: ${fullName}\nphone: ${phone}\nbusiness: ${business}\nemail: ${email}');

    document.querySelector('.cancel-btn').addEventListener('click',() =>
    {
        if(confirm("Are you sure you want to cancel? Changes will be lost.")) {
            document.getElementById('editForm').reset()
        }
    })

});