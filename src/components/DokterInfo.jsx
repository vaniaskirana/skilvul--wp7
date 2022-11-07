import PropTypes from "prop-types";
const DokterInfo = ({url, nama, spesialis, rating}) => {
    return(
        <div className="profil">
            <img src={url} width="150"/>  
            <div>
                <h4>Nama Dokter : {nama}</h4>
                <p>Spesialis Khusus : {spesialis}</p>
                <p>Rate : {rating + 2}</p>
            </div>
        </div>
    )

}
DokterInfo.prototype = {
    nama: PropTypes.string,
    spesialis: PropTypes.string,
    rating: PropTypes.number,
} 


export default DokterInfo;