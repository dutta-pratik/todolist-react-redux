import {connect} from "react-redux";
import {visibilityFilters} from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case visibilityFilters.SHOW_ALL:
            return todos;
        case visibilityFilters.SHOW_COMPLETED:
            return todos.filter(task => task.completed);
        case visibilityFilters.SHOW_ACTIVE:
            return todos.filter(task => !task.completed);
        default:
            throw new Error("unknow filter: " + filter);
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

export default connect(
    mapStateToProps
)(TodoList);