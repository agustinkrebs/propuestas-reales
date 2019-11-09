var download = function(csv) {
    console.log(csv)
    const blob = new Blob([csv], {type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url); 
    a.setAttribute('download', 'download.csv');
    document.body.appendChild(a);
    document.body.removeChild(a);
    }

const button = document.getElementById("download_button");
button.addEventListener('click', download(csv));

