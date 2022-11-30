import "./card-list.styles.css";
import Card from "../card/Card";

const CardList = ({ monsters }) => (
	<div className="card-list">
		{monsters.map((monster) => {
			return <Card monster={monster} key={monster.id} />;
		})}
	</div>
);

export default CardList;
