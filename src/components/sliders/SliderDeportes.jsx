import { motion } from "framer-motion"

export const SliderDeportes = () => {

    const [deportes, setDeportes] = useState([])

    useEffect(() => {
        fetch('https://apiretrogame-production.up.railway.app/api/channels/genre/deportes')
            .then((response) => {
                return response.json()
            })
            .then((deportes) => {
                setDeportes(deportes)
            })
    }, [])


    return (
        <>
            <motion.div>
                <motion.div>
                    {deportes.map((channel) => (
                        <motion.div>
                            <img src={`https://ik.imagekit.io/hooplay/o/hoo-play%2Fimagenes%2Fcanales%2Flogos%2F${channel.img}.jpg?alt=media&token=c1c23d46-cac3-4d48-8390-10a5f9ddfa65`} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </>
    )
}