import useInternetKontrol from "../hooks/useInternetKontrol";
import "./BaglantiKontrol.css"

function BaglantiKontrol() {
  const baglanti = useInternetKontrol()

  return (
    <>
      {baglanti === false && (
        <div className="baglanti-uyari">
          Dikkat! İnternet bağlantınızı kontrol edin!
        </div>
      )}
    </>
  );
}

export default BaglantiKontrol