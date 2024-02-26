import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  name: string;
  cpf: string;
  birthday: string;
  profession: string;
  channel: string;
  address: string;
  city: string;
  state: string;
  cep: string;
  telephone: string;
  phone: string;
  email: string;
  observation: string;
};

export const CustomerForm = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("Dados", data);
  };

  return (
    <div className="w-2/4 mb-10">
      <form className="font-bold w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label
            htmlFor="name"
            className="text-sm text-stone-600 font-bold mb-1"
          >
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            className="text-stone-800 border border-stone-400 rounded pt-2 pr-4 pb-2 pl-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
            {...register("name", {
              required: {
                value: true,
                message: "Nome completo deve ser preenchido.",
              },
            })}
          />
          <p className="text-red-500">{errors.name?.message}</p>
        </div>
        <div className="flex flex-col mb-5">
          <label
            htmlFor="cpf"
            className="text-sm text-stone-600 font-bold mb-1"
          >
            CPF
          </label>
          <input
            type="text"
            id="cpf"
            className="text-stone-800 border border-stone-400 rounded pt-2 pr-4 pb-2 pl-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
            {...register("cpf", {
              required: {
                value: true,
                message: "CPF deve ser preenchido.",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Apenas é aceito números no CPF.",
              },
              maxLength: {
                value: 11,
                message: "CPF deve ter no máximo 11 números.",
              },
              minLength: {
                value: 11,
                message: "CPF deve ter no mínimo 11 digitos.",
              },
            })}
          />
          <p className="text-red-500">{errors.cpf?.message}</p>
        </div>
        <div className="flex flex-col mb-5">
          <label
            htmlFor="birthday"
            className="text-sm text-stone-600 font-bold mb-1"
          >
            Data Aniversário
          </label>
          <input
            type="date"
            id="birthday"
            className="text-stone-800 border border-stone-400 rounded pt-2 pr-4 pb-2 pl-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
            {...register("birthday", {
              required: {
                value: true,
                message: "Data de Aniversário deve ser preenchido.",
              },
            })}
          />
          <p className="text-red-500">{errors.birthday?.message}</p>
        </div>
        <div className="flex flex-col mb-5">
          <label
            htmlFor="profession"
            className="text-sm text-stone-600 font-bold mb-1"
          >
            Profissão
          </label>
          <input
            type="text"
            id="profession"
            className="text-stone-800 border border-stone-400 rounded pt-2 pr-4 pb-2 pl-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
            {...register("profession", {
              required: {
                value: true,
                message: "Profissão deve ser preenchido.",
              },
            })}
          />
          <p className="text-red-500">{errors.profession?.message}</p>
        </div>
        <div className="flex flex-col mb-5">
          <label
            htmlFor="channel"
            className="text-sm text-stone-600 font-bold mb-1"
          >
            Qual foi o primeiro canal de contato (como conheceu a marca)
          </label>
          <input
            type="text"
            id="channel"
            className="text-stone-800 border border-stone-400 rounded pt-2 pr-4 pb-2 pl-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
            {...register("channel", {
              required: {
                value: true,
                message: "Canal de Contato deve ser preenchido.",
              },
            })}
          />
          <p className="text-red-500">{errors.channel?.message}</p>
        </div>
        <div className="form-control">
          <div className="flex flex-col mb-5">
            <label
              htmlFor="address"
              className="text-sm text-stone-600 font-bold mb-1"
            >
              Endereço
            </label>
            <input
              type="text"
              id="address"
              className="text-stone-800 border border-stone-400 rounded pt-2 pr-4 pb-2 pl-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
              {...register("address", {
                required: {
                  value: true,
                  message: "Endereço deve ser preenchido.",
                },
              })}
            />
            <p className="text-red-500">{errors.address?.message}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col mb-5" style={{ width: "32%" }}>
              <label
                htmlFor="city"
                className="text-sm text-stone-600 font-bold mb-1"
              >
                Cidade
              </label>
              <input
                type="text"
                id="city"
                className="text-stone-800 border border-stone-400 rounded pt-2 pr-4 pb-2 pl-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                {...register("city", {
                  required: {
                    value: true,
                    message: "Cidade deve ser preenchido",
                  },
                })}
              />
              <p className="text-red-500">{errors.city?.message}</p>
            </div>
            <div className="flex flex-col mb-5" style={{ width: "32%" }}>
              <label
                htmlFor="state"
                className="text-sm text-stone-600 font-bold mb-1"
              >
                Estado
              </label>
              <input
                type="text"
                id="state"
                className="text-stone-800 border border-stone-400 rounded pt-2 pr-4 pb-2 pl-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                {...register("state", {
                  required: {
                    value: true,
                    message: "Estado deve ser preenchido.",
                  },
                })}
              />
              <p className="text-red-500">{errors.state?.message}</p>
            </div>
            <div className="flex flex-col mb-5" style={{ width: "32%" }}>
              <label
                htmlFor="cep"
                className="text-sm text-stone-600 font-bold mb-1"
              >
                CEP
              </label>
              <input
                type="text"
                id="cep"
                className="text-stone-800 border border-stone-400 rounded pt-2 pr-4 pb-2 pl-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                {...register("cep", {
                  required: {
                    value: true,
                    message: "CEP deve ser preenchido.",
                  },
                })}
              />
              <p className="text-red-500">{errors.cep?.message}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <div className="flex justify-between mb-5">
            <div className="flex flex-col" style={{ width: "49%" }}>
              <label
                htmlFor="telephone"
                className="text-sm text-stone-600 font-bold mb-1"
              >
                Telefone
              </label>
              <input
                type="text"
                id="telephone"
                className="text-stone-800 border border-stone-400 rounded pt-2 pr-4 pb-2 pl-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                {...register("telephone", {
                  maxLength: 11,
                })}
              />
              <p className="text-red-500">{errors.telephone?.message}</p>
            </div>
            <div className="flex flex-col" style={{ width: "49%" }}>
              <label
                htmlFor="phone"
                className="max-w-64 text-sm text-stone-600 font-bold mb-1"
              >
                Celular
              </label>
              <input
                type="text"
                id="phone"
                className="text-stone-800 border border-stone-400 rounded pt-2 pr-4 pb-2 pl-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Celular deve ser preenchido.",
                  },
                  maxLength: 11,
                })}
              />
              <p className="text-red-500">{errors.phone?.message}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="max-w-64 text-sm text-stone-600 font-bold mb-1"
            >
              E-mail
            </label>
            <input
              type="text"
              id="email"
              className="text-stone-800 border border-stone-400 rounded pt-2 pr-4 pb-2 pl-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
              {...register("email", {
                required: {
                  value: true,
                  message: "E-mail deve ser preenchido.",
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "E-mail inválido.",
                },
              })}
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <label
            htmlFor="observation"
            className="max-w-64 text-sm text-stone-600 font-bold mb-1"
          >
            Observação
          </label>
          <textarea
            id="observation"
            cols={6}
            className="text-stone-800 border border-stone-400 rounded pt-2 pr-4 pb-2 pl-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
            {...register("observation")}
          ></textarea>
          <p className="text-red-500">{errors.observation?.message}</p>
        </div>
        <button
          className="w-full text-sky-500 border border-sky-500 rounded focus:outline-none focus:border-sky-500 focus:ring-sky-500 hover:bg-sky-500 hover:text-stone-50"
          style={{ height: "40px" }}
        >
          Cadastrar
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
