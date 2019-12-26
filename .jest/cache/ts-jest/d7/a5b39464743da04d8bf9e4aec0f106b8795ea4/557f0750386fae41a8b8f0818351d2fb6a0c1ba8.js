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
            count: 2
        });
    });
    it('should reduce', () => {
        const reduceReducer = {
            type: count_reducer_1.constants.REDUCE_COUNT,
            payload: {}
        };
        expect(count_reducer_1.default(initState, reduceReducer)).toEqual({
            count: 0
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL0dhby9EZXNrdG9wL21hY2Rlc2t0b3AvUmVhY3ROYXRpdmVCYXNlL3NyYy9yZWR1Y2Vycy9fX3Rlc3RzX18vZGVtby5yZWR1Y2VyLnNwZWMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUVBQTJEO0FBRTNELE1BQU0sU0FBUyxHQUFHO0lBQ2hCLEtBQUssRUFBRSxDQUFDO0NBQ1QsQ0FBQztBQUVGLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO1FBQ3BCLE1BQU0sVUFBVSxHQUFHO1lBQ2pCLElBQUksRUFBRSx5QkFBUyxDQUFDLFNBQVM7WUFDekIsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ0YsTUFBTSxDQUFDLHVCQUFPLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzdDLEtBQUssRUFBRSxDQUFDO1NBQ1QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtRQUN2QixNQUFNLGFBQWEsR0FBRztZQUNwQixJQUFJLEVBQUUseUJBQVMsQ0FBQyxZQUFZO1lBQzVCLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQztRQUNGLE1BQU0sQ0FBQyx1QkFBTyxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNoRCxLQUFLLEVBQUUsQ0FBQztTQUNULENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL0dhby9EZXNrdG9wL21hY2Rlc2t0b3AvUmVhY3ROYXRpdmVCYXNlL3NyYy9yZWR1Y2Vycy9fX3Rlc3RzX18vZGVtby5yZWR1Y2VyLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZHVjZXIsIHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vZGVtby9jb3VudC5yZWR1Y2VyJztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuICBjb3VudDogMVxufTtcblxuZGVzY3JpYmUoJ2luaXQnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgYWRkJywgKCkgPT4ge1xuICAgIGNvbnN0IGFkZFJlZHVjZXIgPSB7XG4gICAgICB0eXBlOiBjb25zdGFudHMuQUREX0NPVU5ULFxuICAgICAgcGF5bG9hZDoge31cbiAgICB9O1xuICAgIGV4cGVjdChyZWR1Y2VyKGluaXRTdGF0ZSwgYWRkUmVkdWNlcikpLnRvRXF1YWwoe1xuICAgICAgY291bnQ6IDJcbiAgICB9KTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCByZWR1Y2UnLCAoKSA9PiB7XG4gICAgY29uc3QgcmVkdWNlUmVkdWNlciA9IHtcbiAgICAgIHR5cGU6IGNvbnN0YW50cy5SRURVQ0VfQ09VTlQsXG4gICAgICBwYXlsb2FkOiB7fVxuICAgIH07XG4gICAgZXhwZWN0KHJlZHVjZXIoaW5pdFN0YXRlLCByZWR1Y2VSZWR1Y2VyKSkudG9FcXVhbCh7XG4gICAgICBjb3VudDogMFxuICAgIH0pO1xuICB9KTtcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==