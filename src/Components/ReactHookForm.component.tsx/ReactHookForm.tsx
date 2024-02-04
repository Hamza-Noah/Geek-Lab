import { FieldValues, useForm } from "react-hook-form";
import {Schema, z} from "zod";
import {zodResolver} from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(3),
  age: z.number().min(18)
})


type FormData = z.infer<typeof schema>;

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            {...register("name", { required: true, minLength: 3 })}
          />
          {errors.name?.type == "required" && (
            <p className="text-danger">The Name Field Is required</p>
          )}
          {errors.name?.type == "minLength" && (
            <p className="text-danger">The Name is at least 3 characters</p>
          )}
          <input type="number" {...register("age", { required: true })} />
          {errors.age?.type == "required" && (
            <p className="text-danger">The age Field Is required</p>
          )}
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}
