package me.jason.todoappserver.controller;

import lombok.RequiredArgsConstructor;
import me.jason.todoappserver.dto.ApiResponse;
import me.jason.todoappserver.entity.Todo;
import me.jason.todoappserver.service.TodoService;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class TodoController {
    private final TodoService todoService;

    @GetMapping("/todo")
    public ApiResponse list() {
        return ApiResponse.builder()
                .resultCode("OK")
                .result(todoService.getList())
                .build();
    }

    @PostMapping("/todo")
    public ApiResponse save(@RequestBody Todo todo) {
        todoService.save(todo);

        return ApiResponse.builder()
                .resultCode("OK")
                .build();
    }

    @DeleteMapping("/todo/{id}")
    public ApiResponse delete(@PathVariable String id) {
        todoService.delete(id);

        return ApiResponse.builder()
                .resultCode("OK")
                .build();
    }
}
