function hapusMenu(url) {

    Swal.fire({
        title: 'Are you sure?',
        text: "Yakin ingin hapus pesan menu?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d3085d6',
        confirmButtonText: 'Ya, hapus'
    }).then((result) => {
        if (result.value) {
            document.location.href = url;
        }
    })
}

function hapusRole(url) {

    Swal.fire({
        title: 'Are you sure?',
        text: "Yakin ingin hapus pesan role?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d3085d6',
        confirmButtonText: 'Ya, hapus'
    }).then((result) => {
        if (result.value) {
            document.location.href = url;
        }
    })
}

function hapuSubmenu(url) {

    Swal.fire({
        title: 'Are you sure?',
        text: "Yakin ingin hapus pesan Submenu?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d3085d6',
        confirmButtonText: 'Ya, hapus'
    }).then((result) => {
        if (result.value) {
            document.location.href = url;
        }
    })
}