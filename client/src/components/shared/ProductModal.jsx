import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import Modal from 'react-modal'
import tw from 'tailwind-styled-components'

const ModalWrapper = tw.div`top-[50%] absolute left-[50%] -translate-x-[50%] -translate-y-[50%] w-full bg-white max-w-[60%] rounded z-50 h-[550px] overflow-hidden max-h-[550px] shadow-lg ring-primary ring`

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

Modal.setAppElement('#root')

const ProductModal = () => {
    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00'
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        // <ModalWrapper className={isOpen ? 'opacity-100 visible' : 'opacity-0 hidden'}>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel='Product Modal'
        >
            <div className='grid grid-cols-2'>
                <div className='bg-slate-400'>
                    <img className='w-full' src='/assets/baby-store-product-img-10.jpg' alt='' />
                </div>

                <div className='p-7 bg-yellow-100 overflow-y-scroll'>
                    <h6 className='text-base font-normal'>Toys</h6>

                    <h2 className='font-sriracha mb-3 text-[26px] lg:text-[40px] leading-[30px] lg:leading-[48px] text-[#3e1f55]'>
                        Exta Soft Touch Lamb Doll
                    </h2>

                    <h5 className='text-base leading-[30px] font-normal text-[#4a4a4a] mb-[10px]'>
                        <b className='font-bold text-[24px leading-[30px]'>$8.50</b> & Free Shipping
                    </h5>

                    <div className='prose'>
                        <b>
                            Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et,
                            aliquet convallis ornare pellentesque nibh phasellus tempor.
                        </b>
                        <p>
                            Egestas fringilla eu pellentesque phasellus sed varius non ut tincidunt sed massa nec massa
                            pulvinar ipsum sed vitae vitae feugiat sem in etiam non turpis blandit lorem fringilla lacus
                            elementum urna maecenas proin eget fermentum nunc morbi mus pretium cursus Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Provident sunt, ipsum qui quia placeat corrupti vel
                            molestiae voluptates nisi sed ex, et voluptate id! A ab fuga ullam porro laborum provident
                            illum cupiditate quia quidem velit, possimus officiis eos esse modi culpa aliquid? Deleniti
                            voluptas molestiae autem veritatis voluptates delectus!
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos suscipit quia hic facilis
                            saepe laudantium minus corrupti repudiandae, eius, deleniti error ratione. Autem cumque
                            earum reiciendis perferendis illo repudiandae a amet odio assumenda, possimus nesciunt quasi
                            incidunt ratione est dolor libero, suscipit repellat placeat quod delectus. Debitis
                            dignissimos nemo unde!
                        </p>
                    </div>

                    <hr />

                    <div className='flex items-center gap-4 mt-1'>
                        <p>Category: Toys</p>

                        <p>Tags: animal,doll,lamb</p>
                    </div>
                </div>
            </div>

            <button
                onClick={{}}
                className='bg-white w-[23px] h-[23px] rounded-full absolute z-50 -right-2 -top-2 flex items-center justify-center'
            >
                <FaTimes />
            </button>
        </Modal>
    )
}

export default ProductModal
