"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const count_reducer_1 = __importStar(require("../demo/count.reducer"));
const initState = {
    count: 1
};
describe('init', () => {
    it('should add', () => {
        const addReducer = {
            type: count_reducer_1.constants.ADD_COUNT,
            payload: {}
        };
        expect(count_reducer_1.default(initState, addReducer)).toEqual({
            count: 1
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL0dhby9EZXNrdG9wL21hY2Rlc2t0b3AvUmVhY3ROYXRpdmVCYXNlL3NyYy9yZWR1Y2Vycy9fX3Rlc3RzX18vZGVtby5yZWR1Y2VyLnNwZWMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUVBQTJEO0FBRTNELE1BQU0sU0FBUyxHQUFHO0lBQ2hCLEtBQUssRUFBRSxDQUFDO0NBQ1QsQ0FBQztBQUVGLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO1FBQ3BCLE1BQU0sVUFBVSxHQUFHO1lBQ2pCLElBQUksRUFBRSx5QkFBUyxDQUFDLFNBQVM7WUFDekIsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ0YsTUFBTSxDQUFDLHVCQUFPLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzdDLEtBQUssRUFBRSxDQUFDO1NBQ1QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvR2FvL0Rlc2t0b3AvbWFjZGVza3RvcC9SZWFjdE5hdGl2ZUJhc2Uvc3JjL3JlZHVjZXJzL19fdGVzdHNfXy9kZW1vLnJlZHVjZXIuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVkdWNlciwgeyBjb25zdGFudHMgfSBmcm9tICcuLi9kZW1vL2NvdW50LnJlZHVjZXInO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gIGNvdW50OiAxXG59O1xuXG5kZXNjcmliZSgnaW5pdCcsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCBhZGQnLCAoKSA9PiB7XG4gICAgY29uc3QgYWRkUmVkdWNlciA9IHtcbiAgICAgIHR5cGU6IGNvbnN0YW50cy5BRERfQ09VTlQsXG4gICAgICBwYXlsb2FkOiB7fVxuICAgIH07XG4gICAgZXhwZWN0KHJlZHVjZXIoaW5pdFN0YXRlLCBhZGRSZWR1Y2VyKSkudG9FcXVhbCh7XG4gICAgICBjb3VudDogMVxuICAgIH0pO1xuICB9KTtcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==