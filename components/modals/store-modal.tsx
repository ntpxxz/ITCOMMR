"use Client"
import { Modal }from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/use-store-modal"
export const StoreModal = () => {
    const StoreModal = useStoreModal()
    return(
   <Modal 
    title="Create Store" 
    description="Add a new store to manage products and catagories" 
    isOpen ={false}
    onClose={()=>{}}>
    Feture Create Stroe Frorm
   </Modal>
  
    )
};


