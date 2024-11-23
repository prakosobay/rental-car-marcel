$(function () {
    const modalContent = {
        MitsubishiExpander: {
            title: "Mitsubishi Expander",
            body: "Mitsubishi Expander adalah mobil keluarga dengan fitur modern dan kenyamanan maksimal.",
            brand : "Mitsubishi",
            yearOfMade : "-",
            seat : "6",
            pricePerDay : "Rp 1.000.000",
            pricePerWeek : "Rp 5.000.000",
            pricePerMonth : "Rp 15.000.000",
        },
        ToyotaAvanza: {
            title: "Toyota Avanza",
            body: "Toyota Avanza adalah mobil serbaguna dengan performa unggul dan irit bahan bakar.",
            brand : "Toyota",
            yearOfMade : "-",
            seat : "6",
            pricePerDay : "Rp 1.000.000",
            pricePerWeek : "Rp 6.000.000",
            pricePerMonth : "Rp 16.000.000",
        },
        KijangInova: {
            title: "Kijang Inova",
            body: "Kijang Inova menawarkan ruang kabin luas dan teknologi canggih untuk perjalanan nyaman.",
            brand : "Kijang",
            yearOfMade : "-",
            seat : "6",
            pricePerDay : "Rp 1.000.000",
            pricePerWeek : "Rp 4.000.000",
            pricePerMonth : "Rp 17.000.000",
        }
    };

    Handler(modalContent);
});

function Handler(modalContent) {
    $('.car-button').click(function () {
        const carType = $(this).data('car'); // Get car type from data attribute
        console.log("carType", carType);
        const content = modalContent[carType]; // Fetch content from modalContent object

        if (content) {
            $('#carModalLabel').text(content.title);
            $("#inpBrand").val(content.brand);
            $("#inpYearOfMade").val(content.yearOfMade);
            $("#inpSeat").val(content.seat);
            $("#inpPricePerDay").val(content.pricePerDay);
            $("#inpPricePerWeek").val(content.pricePerWeek);
            $("#inpPricePerMonth").val(content.pricePerMonth);
            $('#carModal').modal('show'); // Show the modal
        } else {
            console.error("Content not found for car type:", carType);
        }
    });
}