package me.jason.todoappserver.service;

import lombok.RequiredArgsConstructor;
import me.jason.todoappserver.entity.Todo;
import me.jason.todoappserver.repo.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TodoService {
    private final TodoRepository todoRepository;

    public List<Todo> getList() {
        return todoRepository.findAll();
    }

    public void save(Todo todo) {
        todoRepository.save(todo);
    }

    public void delete(String id) {
        todoRepository.deleteById(id);
    }
}
