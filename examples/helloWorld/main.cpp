#include <httplib.h>
#include <nlohmann/json.hpp>

int main() {
    httplib::Client client("localhost", 11434);

    nlohmann::json j;
    j["model"] = "llama3";
    j["messages"] = { { {"role", "user"}, {"content", "why is the sky blue?"} } };

    std::string response_body;

    auto res = client.Post("/api/chat", j.dump(), "application/json",
        [&](const char *data, size_t data_length) {
            response_body.append(data, data_length);
            return true;
        }
    );

    if (res && res->status == 200) {
        std::cout << response_body << std::endl;
    } else {
        std::cout << "Failed to make a request" << std::endl;
    }

    return 0;
}