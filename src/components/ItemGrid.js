import React from "react";
import {Table} from "antd";
import Counter from "./Counter";
import {useSelector} from "react-redux";
import {getAmountOfTodos, getTodos} from "../redux/selectors/todoList";

const {Column} = Table;

const ItemGrid = () => {
    const data = useSelector(getTodos);
    const amount = useSelector(getAmountOfTodos);
    return (
        <div className="ItemGrid">
            <Counter amount={amount}/>
            <Table
                dataSource={data}
                rowKey="id"
                className="table"
            >
                <Column
                    title="Status"
                    dataIndex="completed"
                    key="status"
                    className="status"
                    render={() => <span>Open</span>}
                />
                <Column title="Title" dataIndex="title" key="title"/>
            </Table>
        </div>
    );
};

export default ItemGrid;
