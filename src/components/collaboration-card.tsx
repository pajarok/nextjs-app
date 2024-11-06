
import { SponsoredEvent as CollaborationCardProp } from "@/services/get-sponsored-events.service"

export default function CollaborationCard(sponsoredEvent: CollaborationCardProp) {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl hover:border hover:border-indigo-100">
      <h3 className="font-bold mb-2 text-xl text-center">{sponsoredEvent.event.account.name}</h3>
      <p className="mb-5 text-lg text-center"> Colaboraste con: {sponsoredEvent.tokens.toFixed(0)} tokens</p>
      <div>
        {
            !sponsoredEvent.event.account.acceptedMint ? (
              <div className="flex gap-6 justify-end">
                <button className="bg-indigo-300 text-black font-semibold px-4 py-2 rounded basis-[50%] hover:text-white hover:bg-indigo-400"
                    onClick={() => alert("Próximamente")}>
                    Retirar Ganancias 
                </button>
                </div>
            ):(
              <div className="flex gap-6 justify-center">
                <p className="font-bold mb-4 text-lg text-center">*¡Este evento no ha finalizado!*</p>
              </div>
            )
        }
    </div>
    </div>
  );
}