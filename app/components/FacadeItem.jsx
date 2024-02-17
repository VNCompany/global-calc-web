import Image from "next/image";

import styles from "./FacadeItem.module.css";
import FlatButton from "@/app/components/uikit/FlatButton";

export default function FacadeItem() {
    return (
        <div className={styles.facadeItem}>
            <Image src="/1-preview.jpg"
                   alt="facadeImage"
                   width={115} height={115}
                   style={{ borderRadius: 15 }} />

            <div className={styles.facadeItemInfo}>
                <div>
                    <span style={{ fontWeight: "bold", fontSize: 25 }}>A21 MZ 17</span>
                    &nbsp;&nbsp;&nbsp;
                    <span>555 x 666 мм (0,56 x 0,67 м)</span>
                </div>
                <div className={styles.facadeItemDetails}>Уплотнитель</div>
                <div className={styles.facadeItemDetails}>Фрезеровка: Под петлю (широкая рамка) x 5</div>
                <div>
                    <FlatButton className="mr-10">Удалить</FlatButton>
                    <FlatButton>Изменить</FlatButton>
                </div>
            </div>
        </div>
    )
}
