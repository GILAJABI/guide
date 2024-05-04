package com.guide.ex.service;

import com.guide.ex.domain.member.MemberProfile;
import com.guide.ex.dto.member.MemberDTO;
import com.guide.ex.dto.member.MemberProfileDTO;

public interface MemberService {
    void signUp(MemberDTO memberDto);
    boolean login(String uid, String pwd);
    Long setLoginSession(String uid);
    boolean isIdAlreadyExists(String uid);
    void fileUpload(MemberProfileDTO dto);
//    MemberProfileDTO memberInfo(Long member_id);
    MemberDTO readOne(Long member_id);
    void modify(MemberProfileDTO memberProfileDTO);
    //아래 함수는 DTO로 ModelMapper를 활용해 수정
    MemberProfile memberInfo(Long member_id);
}
