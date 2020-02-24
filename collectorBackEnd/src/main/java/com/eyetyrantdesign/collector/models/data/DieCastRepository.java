package com.eyetyrantdesign.collector.models.data;

import com.eyetyrantdesign.collector.models.DieCast;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DieCastRepository extends CrudRepository<DieCast, Integer> {

}
