import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {

    let loggerSpy: any;
    let calculator: CalculatorService;

    beforeEach(() => {
        console.log('calling beforeEach');
        
        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                {provide: LoggerService, useValue: loggerSpy}
            ]
        })

        calculator = TestBed.get(CalculatorService);
    });

    it('should add two numbers', () => {

        console.log('add test');

        const result = calculator.add(2, 2);

        expect(result).toBe(4);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it('should subtract two numbers', () => {

        console.log('subtract test');

        const result = calculator.subtract(2, 2);

        expect(result).toBe(0, 'unexcepted substraction result');
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);


    });

});