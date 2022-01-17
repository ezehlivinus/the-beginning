/* eslint-disable no-underscore-dangle */
import dayjs from 'dayjs';

class UserService {
  async findCurrentAge(birthday: Date): Promise<number> {
    const _birthday = dayjs(birthday);
    const now = dayjs();
    return now.diff(_birthday, 'year');
  }

  isValidAge(age: number): boolean {
    return age >= 15;
  }
}

export default new UserService();
