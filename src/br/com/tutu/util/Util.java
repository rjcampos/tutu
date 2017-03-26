package br.com.tutu.util;

import java.util.Calendar;
import java.util.Calendar.Builder;

public class Util {
	public static Builder parseDataIntoCalendar(String data){
		String[] parametros_data = data.split("/");
		Builder data_builder = new Calendar.Builder().setDate(Integer.parseInt(parametros_data[2]),
				Integer.parseInt(parametros_data[1]) - 1, Integer.parseInt(parametros_data[0]));
		return data_builder;
	}
}
