import FlatButton from "@/app/components/uikit/FlatButton";
import FacadeItem from "@/app/components/FacadeItem";

export default function MainWindow() {
    return (
        <>
            <div className="mb-20">
                <FlatButton className="mr-10">Добавить фасад</FlatButton>
                <FlatButton disabled>Очистить</FlatButton>
            </div>

            <p className="mb-20">Количество: <strong>1001</strong>&nbsp;&nbsp;&nbsp;&nbsp;Сумма: <strong>5605600,00</strong></p>

            <div>
                <FacadeItem />
            </div>
        </>
    );
}
