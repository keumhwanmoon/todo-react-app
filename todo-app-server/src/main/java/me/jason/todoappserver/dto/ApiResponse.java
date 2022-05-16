package me.jason.todoappserver.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class ApiResponse {
    private String resultCode;
    private Object result;
    private String resultMessage;

    @Builder
    public ApiResponse(String resultCode, Object result, String resultMessage) {
        this.resultCode = resultCode;
        this.result = result;
        this.resultMessage = resultMessage;
    }
}
